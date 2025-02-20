import { useCreateMyBookStore, useGetMyBookStore, useUpdateMyBookStore } from '@/api/MyBookStoreApi';
import ManageBookStoreForm from '@/forms/user-profile-form/manage-bookstore-form/ManageBookStoreForm';


const ManageBookStorePage = () => {
    const {createBookStore, isLoading: isCreateLoading } = useCreateMyBookStore();
    const { bookstore }= useGetMyBookStore ();
    const {updateBookStore, isLoading: isUpdateLoading} = useUpdateMyBookStore ();

    const isEditing = !!bookstore;

    return (
        <ManageBookStoreForm  onSave = { isEditing ? updateBookStore : createBookStore} isLoading = {isCreateLoading || isUpdateLoading}/>
    );
    
};

export default ManageBookStorePage;
