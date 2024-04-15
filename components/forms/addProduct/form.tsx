//@ts-ignore
import MainButton from "@/components/buttons/MainButton";
import styles from "@/styles/components/forms/forms.module.css";
import { useForm } from "react-hook-form";
import marketplace from "@/ethereum-hardhat/artifacts/src/ethereum-hardhat/contracts/Marketplace.sol/Marketplace.json";
import { useEffect } from "react";
// import { useDocument, usePolybase } from "@polybase/react";
const { v4: uuidv4 } = require("uuid");

function ProductForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let contract: any = undefined;

    function web() {
        //@ts-ignore
        const web3 = window.web3;
        contract = new web3.eth.Contract(
            marketplace.abi,
            "0xB9e078C2C9C192cd2c5241c5E75F2c65cc81BBf6"
        );
    }
    //@ts-ignore

    useEffect(() => {
        web();
    }, []);

    async function onSubmit(data: any) {
        // polybase
        //     .collection("Product")
        //     .create([
        //         uuidv4(),
        //         data.title,
        //         data.country,
        //         data.genre,
        //         +data.quantity,
        //         +data.price,
        //         data.description,
        //         data.company,
        //     ]);
        contract.methods
            .addProduct(uuidv4(), data.title, data.price * 10 ** 18, [
                data.code,
            ])
            .send(
                //@ts-ignore
                { from: "0x639b2623C8570ea91163F1d2C734FFe03ABa24Ce" }
            )
            .then(() => alert("Product added"));

        // alert("Product added");
        console.log(data);
    }

    return (
        <div className={styles.addProduct}>
            <form
                className={`${styles.form} ${styles.product}`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.info}>
                    <div className={styles.input}>
                        <label htmlFor="Country">Country</label>
                        <input
                            placeholder="Bolivia"
                            type="text"
                            id="country"
                            // required
                            {...register("country", {
                                required: "The field is required",
                            })}
                        />
                        {errors?.country && (
                            <p>{`${errors.country.message}`}</p>
                        )}
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="genre">Genre</label>
                        <input
                            placeholder="Video Games"
                            type="text"
                            id="genre"
                            // required
                            {...register("genre", {
                                required: "The field is required",
                            })}
                        />

                        {errors?.genre && <p>{`${errors.genre.message}`}</p>}
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="quantity">Quanty</label>
                        <input
                            placeholder="2"
                            type="number"
                            id="quantity"
                            // required
                            {...register("quantity", {
                                required: "The field is required",
                                pattern: {
                                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                    message:
                                        "The field should be a positive number",
                                },
                            })}
                        />

                        {errors?.quantity && (
                            <p>{`${errors.quantity.message}`}</p>
                        )}
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="quantity">Code</label>
                        <input
                            placeholder="01wkdsmkamsd"
                            type="text"
                            id="code"
                            // required
                            {...register("code", {
                                required: "The field is required",
                            })}
                        />

                        {errors?.code && <p>{`${errors.code.message}`}</p>}
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="company">Company</label>
                        <select id="company" {...register("company")}>
                            <option value="ps">Play Station</option>
                            <option value="xbox">Xbox</option>
                            <option value="pstore">Play Store</option>
                            <option value="apple">Apple</option>
                            <option value="steam">Steam</option>
                        </select>

                        {errors?.quantity && (
                            <p>{`${errors.quantity.message}`}</p>
                        )}
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.input}>
                        <label htmlFor="title">Title</label>
                        <input
                            placeholder="PS5 Game"
                            type="text"
                            id="title"
                            // required
                            {...register("title", {
                                required: "The field is required",
                            })}
                        />

                        {errors?.title && <p>{`${errors.title.message}`}</p>}
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="price">Price</label>
                        <input
                            placeholder="0.0003"
                            type="text"
                            id="price"
                            // required
                            {...register("price", {
                                required: "The field is required",
                                pattern: {
                                    value: /^[+-]?\d+(\.\d+)?$/,
                                    message:
                                        "The field should be a valid price",
                                },
                            })}
                        />

                        {errors?.price && <p>{`${errors.price.message}`}</p>}
                    </div>
                    <div className={styles.des}>
                        <div className={styles.input}>
                            <label htmlFor="description">Description</label>
                            <input
                                placeholder="The code is for..."
                                type="text"
                                id="description"
                                // required
                                {...register("description", {
                                    required: "The field is required",
                                })}
                            />

                            {errors?.description && (
                                <p>{`${errors.description.message}`}</p>
                            )}
                        </div>
                    </div>
                </div>
            </form>
            <MainButton type="button" handleClick={handleSubmit(onSubmit)}>
                Enviar
            </MainButton>
        </div>
    );
}

export default ProductForm;
