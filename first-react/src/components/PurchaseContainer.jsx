import { ProductForm } from "./ProductForm";
import { PurchaseResume } from "./PurchaseResume";

export const PurchaseContainer = () => {

    return (
        <section className="container">
            <ProductForm />
            <PurchaseResume />
        </section>
    )
}