import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import BookItemInput from "./BookItemInput";

const BookSection = () => {
    const {control} = useFormContext ();

    const {fields, append, remove} = useFieldArray ({
        control,
        name: "bookItem",
    });


    return <div className = " space-y-2">
        <div>
            <h2 className = "text-2xl font-bold">Books</h2>
            <FormDescription>
                Create your own list and give each item a name and a price
            </FormDescription>
        </div>
        <FormField control = {control } name = "bookItem" render={() => (
            <FormItem className = "flex flex-col gap-2">
                {fields.map((_,index)=> (
                    <BookItemInput index = {index} removeBookItem = {()=> remove(index)}
                    />
                ))}

            </FormItem>
        ) }
        />
        <Button type = "button" onClick = {() => append ({name: "", price: ""})} >
            Add Book Item
        </Button>
    </div>;

}

export default BookSection;