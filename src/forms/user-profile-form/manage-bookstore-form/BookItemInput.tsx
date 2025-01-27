import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
    index: number;
    removeBookItem: () => void;
};

const BookItemInput = ({ index, removeBookItem }: Props) => {
    const { control } = useFormContext();

    return (
        <div className="flex flex-row items-end gap-2">
            {/* Book Name Input */}
            <FormField 
                control={control} 
                name={`bookItem.${index}.name`} 
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="flex items-center gap-1"> {/* Corrected to 'items-center' */}
                            Name
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="Forget Me Not"
                                className="bg-white"
                            />
                        </FormControl>
                        <FormMessage />  {/* Moved below FormControl */}
                    </FormItem>
                )}
            />

            {/* Book Price Input */}
            <FormField 
                control={control} 
                name={`bookItem.${index}.price`} 
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="flex items-center gap-1"> {/* Corrected to 'items-center' */}
                            Price (Rs.)
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="Rs. 1200"
                                className="bg-white"
                            />
                        </FormControl>
                        <FormMessage />  {/* Moved below FormControl */}
                    </FormItem>
                )}
            />

            {/* Remove Button */}
            <Button 
                type="button" 
                onClick={removeBookItem} 
                className="bg-red-500 max-h-fit">  {/* Corrected button class */}
                Remove
            </Button>
        </div>
    );
};

export default BookItemInput;
