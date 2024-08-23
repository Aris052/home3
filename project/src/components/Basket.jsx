import { BasketItem } from './BasketItem'

export const Basket = ({ cart, add, minus, remove }) => {
    return <div className="col-md-5">
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((elm) => <BasketItem elm={elm} add={add} key={elm.id} minus={minus} remove={remove} />)
                }
            </tbody>
        </table>
    </div>
}


