import { useNavigation } from "react-router-dom"

function SubmitButton({text}) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting'
  return (
    <button type="submit" className="btn btn-accent btn-block capitalize" disabled={isSubmitting}>
        { isSubmitting? <>
        <span className="loading loading-spinner"></span>sending...
        </>:
        text || 'submit'
        }
    </button>
  )
}

export default SubmitButton