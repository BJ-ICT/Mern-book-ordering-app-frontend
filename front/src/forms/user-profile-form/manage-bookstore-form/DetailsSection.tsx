import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { control } = useFormContext();

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Details</h2>
                <FormDescription>
                    Enter the details about your Book Store
                </FormDescription>
            </div>

            {/* Book Store Name */}
            <FormField
                control={control}
                name="bookStoreName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* City, Delivery Price, Estimated Delivery Time */}
            <div className="flex gap-4">
                <FormField
                    control={control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="deliveryPrice"
                    render={({ field }) => (
                        <FormItem className="max-w-[25%]">
                            <FormLabel>Delivery Price (Rs.)</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" placeholder="750" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="estimatedDeliveryTime"
                    render={({ field }) => (
                        <FormItem className="max-w-[25%]">
                            <FormLabel>Estimated Delivery Time (min)</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" placeholder="30" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
};

export default DetailsSection;
