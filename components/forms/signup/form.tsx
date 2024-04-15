import styles from "@/styles/components/forms/forms.module.css";
import { useForm } from "react-hook-form";

function SignUpForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    function onSubmit(data: any) {
        console.log(data);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input}>
                <label htmlFor="username">Username</label>
                <input
                    placeholder="User1"
                    type="text"
                    id="username"
                    // required
                    {...register("username", {
                        required: "The field is required",
                    })}
                />
                {errors?.username && <p>{`${errors.username.message}`}</p>}
            </div>
        </form>
    );
}

export default SignUpForm;
