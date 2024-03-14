import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        name: "Coffee",
        price: "Rp 23.000,00",
        image: "/img/cake1.jpeg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur nulla corrupti, vitae quae quidem iusto modi maiores! Eligendi nihil repudiandae odio debitis consequatur est ullam, odit placeat similique ducimus!`,
    },
    {
        id: 2,
        name: "Tea",
        price: "Rp 21.000,00",
        image: "/img/cake1.jpeg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur nulla corrupti, vitae quae quidem iusto modi maiores!`,
    },
    {
        id: 3,
        name: "jus",
        price: "Rp 30.000,00",
        image: "/img/cake1.jpeg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias saepe fugiat, dicta vero perferendis laborum corrupti odit minus magni!`,
    },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login";
    }
    return (
        <Fragment>
        <div className="flex justify-end h-20 bg-teal-300 text-white items-center px-10">
            {email}
            <Button classname="ml-5 bg-black" onClick={handleLogout}>Log out!</Button>
        </div>
        <div className="flex justify-center py-10">
            {products.map((product) => (
                 <CardProduct key={product.id}>
                 <CardProduct.Header image={product.image} />
                 <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
                 <CardProduct.Footer price={product.price} />
             </CardProduct>
         ))}
     </div>
        </Fragment>
    );
};

export default ProductsPage;