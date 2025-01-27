import { useCreateMyBookStore, useGetMyBookStore } from '@/api/MyBookStoreApi';
import ManageBookStoreForm from '@/forms/user-profile-form/manage-bookstore-form/ManageBookStoreForm';


const ManageBookStorePage = () => {
    const {createBookStore, isLoading } = useCreateMyBookStore();
    const {bookstore}= useGetMyBookStore ();
    return (
        <ManageBookStoreForm onSave = {createBookStore} isLoading = {isLoading}/>
    );
    
};

export default ManageBookStorePage;
