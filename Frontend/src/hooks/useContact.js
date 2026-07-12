import { useContext } from 'react'
import { ContactContext } from '../contexts/contact.context'
import { createContact } from '../services/contact.api'

export const useContact = () => {
    const context = useContext(ContactContext)
    const { loading, setLoading } = context;

    const handleContactSave = async ({ name, email, phoneNo, company, teamSize, interestedIn }) => {
        setLoading(true);
        try {
            const response = await createContact({ name, email, phoneNo, company, teamSize, interestedIn });
            return { success: true, data: response.data };
        } catch (error) {
            console.error("Error saving contact:", error);
            return { success: false, error };
        } finally {
            setLoading(false);
        }
    }
    return { loading, setLoading, handleContactSave };
}