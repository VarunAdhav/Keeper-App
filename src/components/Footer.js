const date = new Date();
const year = date.getFullYear();

function Footer(){
    return <p>Copyright © {year}</p>;
}
export default Footer;