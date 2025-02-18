import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props ={
    category: string;
    field: ControllerRenderProps <FieldValues,"category">;


};

const CategoryCheckbox = ({category, field}: Props) => {
    return (
        <FormItem className = "flex flex-row items-center space-x-1 space-y-0 mt-2">
            <FormControl>
                <Checkbox className="bg-white" checked = {field.value.includes (category)} onCheckedChange={(checked)=>{
                    if (checked) {
                        field.onChange ([...field.value, category]);

                    } else {
                        field.onChange (field.value.filter ((value: string)=> value !== category)
                    );

                    }

                }}/>

            </FormControl> 
            <FormLabel className = "text-sm font-normal">{category}</FormLabel>

        </FormItem>
    );
};

export default CategoryCheckbox;