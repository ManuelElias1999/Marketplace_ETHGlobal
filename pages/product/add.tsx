import ProductForm from "@/components/forms/addProduct/form";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import { useForm } from "react-hook-form";

function add() {
    return (
        <div>
            <Header />
            <ProductForm />
            <Footer />
        </div>
    );
}

export default add;
