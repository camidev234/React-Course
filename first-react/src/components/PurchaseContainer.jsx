import { ProductForm } from "./ProductForm";
import { PurchaseResume } from "./PurchaseResume";

export const PurchaseContainer = () => {

    return (
        <section className="bg-zinc-900 pt-9 pb-11 min-h-lvh">
            <ProductForm />
            <PurchaseResume />
        </section>
    )
}