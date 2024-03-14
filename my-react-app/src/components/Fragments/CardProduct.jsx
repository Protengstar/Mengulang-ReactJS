import Button from "../Elements/Button";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 flex flex-col justify-between">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <img src={image} alt="product" className="p-8 rounded-t-lg" />
        </a>
    );
};

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h3 className="text-xl font-semibold tracking-tight text-white">{name}</h3>
                <p className="text-s text-white">{children}</p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5 ">
            <span className="text-3xl font-bold text-white">Rp {price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</span>
            <Button classname="bg-blue-700" onClick={() => handleAddToCart(id)}>Add to Cart</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;