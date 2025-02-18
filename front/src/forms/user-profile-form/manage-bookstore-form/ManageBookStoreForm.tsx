import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@radix-ui/react-separator";
import CategorySection from "./CategorySection";
import BookSection from "./BookSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { BookStore } from "@/types";
import { useEffect } from "react";



const formSchema = z.object({
    bookStoreName: z.string({
        required_error: "BookStore name is required",
        
    }),
    city: z.string({
        required_error: "City is required"
    }),
    

    //coerce convert string in to number
    deliveryPrice: z.coerce.number({
        required_error: "Deliver Price is required",
        invalid_type_error: "Must be a valid number",
    }),
    estimatedDeliveryTime: z.coerce.number({
        required_error: "Estimated Delivery Time is required",
        invalid_type_error: "Must be a valid number",
    }),
    category:z.array(z.string()).nonempty({
        message: "Please select at least one item",
    }),
    bookItems: z.array(z.object({
        name: z.string().min(1,"Name is required"),
        price: z.coerce.number().min(1,"Price is required"),

    })
),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, {message: "image is required"}).optional (),

}).refine ((data)=> data.imageUrl || data.imageFile, {
    message:"Either image Url or image File must be provided",
    path: ["imageFile"]
})

type BookStoreFormData= z.infer<typeof formSchema>

type Props = {
    bookstore?: BookStore;
    onSave: (bookStoreFormData: FormData)=> void;
    isLoading: boolean;

};

const ManageBookStoreForm = ({onSave, isLoading, bookstore}: Props) => {
    const form = useForm<BookStoreFormData>({
        resolver : zodResolver(formSchema),
        defaultValues: {
            category: [],
            bookItems:[{name: "", price: 0}],
        },
    });


    useEffect (() => {
        if (!bookstore) {
            return;
        }

        const deliveryPriceFormatted = parseInt( (bookstore.deliveryPrice/ 100). toFixed (2)
    );


    const bookItemsFormatted = bookstore.bookItems.map((item)=> ({
        ...item,
        price: parseInt ((item.price/100). toFixed (2)),
    }));  

    const updateBookStore = {
        ...bookstore,
        deliveryPrice: deliveryPriceFormatted,
        bookItems: bookItemsFormatted,
    };

        form.reset (updateBookStore);

    }, [form, bookstore]);

    const onSubmit = (formDataJson: BookStoreFormData) => {
        console.log("Form submitted!", formDataJson); 
        const formData = new FormData ();

        formData.append ("bookStoreName", formDataJson.bookStoreName);
        formData.append ("city", formDataJson.city);

        formData.append ("deliveryPrice", (formDataJson.deliveryPrice* 100).toString()
    );

    formData.append ("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.category.forEach ((category, index) => {
        formData.append (`category[${index}]`,category);

    });
    formDataJson.bookItems.forEach((bookItem, index)=> {
        formData.append(`bookItems[${index}][name]`,bookItem.name);
        formData.append(`bookItems[${index}][price]`,(bookItem.price * 100).toString()
    );
    });

    if (formDataJson.imageFile){
        formData.append (`imageFile`,formDataJson.imageFile);
    }
    

    onSave (formData);

    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg">

                <DetailsSection />
                <Separator/>
                <CategorySection/>
                <Separator/>
                <BookSection/>
                <Separator/>
                <ImageSection/>
                {isLoading ? <LoadingButton/> : <Button type = "submit">Submit</Button>}

            </form>

        </Form>
    )

};

export default ManageBookStoreForm;