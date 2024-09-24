import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";

// error msg come from this
const formSchema = z.object({
    email:z.string().optional(),
    name:z.string().min(1,"Name is required"),
    addressLine1:z.string().min(1,"Addressline1 is required"),
    city:z.string().min(1,"City is required"),
    mobileNumber:z.string().min(1,"Mobile number is required"),
});

type UserFormData = z.infer <typeof formSchema>;

type Props = {
    currentUser : User;
    onSave: (userProfileData: UserFormData)=> void;
    isLoading : boolean;
}

// formschema liked for this
const UserProfileForm = ({onSave, isLoading, currentUser}: Props) => {
    const form = useForm <UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser,
    });

    useEffect (()=> {
        form.reset(currentUser);
    }, [currentUser, form]);
    

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} className = "space-y-4 bg-gray-50 rounded-lg md:p-10">
                <div>
                    <h2 className = "text-2x1 font bold">User Profile Form</h2>
                    <FormDescription>
                        Viwe and change your profile information here
                    </FormDescription>
                </div>
                <FormField control = {form.control} name = "email" render = {({field})=>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className = "bg-white"/>
                        </FormControl>
                    </FormItem>
                 )}
                 />

                <FormField control = {form.control} name = "name" render = {({field})=>(
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} className = "bg-white"/>
                        </FormControl>
                        
                        <FormMessage/>
                    </FormItem>
                 )}
                 />
                <div className = "flex flex-col md:flex-row gap-4">
                    <FormField control = {form.control} name = "addressLine1" render = {({field})=>(
                         <FormItem>
                             <FormLabel className = "flex-1">Address Line 1</FormLabel>
                                 <FormControl>
                                     <Input {...field}  className = "bg-white"/>
                               </FormControl>
                               <FormMessage/>
                         </FormItem>
                 )}
                    />

                    <FormField control = {form.control} name = "city" render = {({field})=>(
                    <FormItem className = "flex-1">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} className = "bg-white"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                 )}
                 />

                    <FormField control = {form.control} name = "mobileNumber" render = {({field})=>(
                    <FormItem className = "flex-1">
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                            <Input {...field} className = "bg-white"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                 )}
                 />
                </div>
                {isLoading ? <LoadingButton/>: <Button type = "submit" className="bg-blue-custom">Submit</Button>}
            </form>
        </Form>
    )

};

export default UserProfileForm;