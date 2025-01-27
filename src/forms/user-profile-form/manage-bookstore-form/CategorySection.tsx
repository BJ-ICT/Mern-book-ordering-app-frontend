import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { categoryList } from "@/config/bookstore-options-config";
import { useFormContext } from "react-hook-form";
import CategoryCheckbox from "./CategoryCheckbox";

const CategorySection = () => {
    const { control } = useFormContext();

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Category</h2>
                <FormDescription>
                    Select your book category
                </FormDescription>
            </div>
            <FormField 
                control={control} 
                name="category" 
                render={({ field }) => (
                    <FormItem>
                        <div className="grid md:grid-cols-5 gap-1">
                            {categoryList.map((categoryItem) => (
                                <CategoryCheckbox 
                                    key={categoryItem} // Using categoryItem as the unique key
                                    category={categoryItem} 
                                    field={field} 
                                />
                            ))}
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default CategorySection;
