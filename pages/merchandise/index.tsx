import AdditionalFeatures2 from "../../components/addFeatures2";
import Feature from "../../components/feature";
import Image from "../../components/image";
import Subpage2 from "../../components/subpage2";

export default function Merchandise() {
    return <Subpage2
        title="Merchandise"
        src="/svg/merch.svg"
        alt="Sports Team Merchandise"
        tags="sports team merchandise,custom sports merch,adult sports shirts,hockey team tshirts"
        desc="Building some team comradery is essentail for any sports team. Crosscheck Sports can manage an entire e-commerce platform for your team, for a fraction of the price. You tell us what merchandise you would like to sell, give us some designs, and a store will be opened and operated for you!">
        <div className="space-y-32">
            <div className="space-y-4">
                <div className={`grid place-items-center`}>
                    <Image props={{
                        src: "/images/puck-norris-tshirt.png",
                        alt: "Puck Norris tshirt",
                        divClass: "max-w-[800px]",
                        imgClass: "min-w-[200px] md:min-w-[400px]"
                    }} />
                </div>
                <div className="space-y-2 text-center grid place-items-center">
                    <h3 className="text-2xl font-bold">Custom Storefront</h3>
                    <p className="text-gray-400 max-w-xl"><a href="shop.pucknorris.com" target="_blank" rel="noopener noreferrer" className="hover:no-underline underline hover:opacity-50 transition-all" >Puck Norris</a> uses Crosscheck Sports to manage their merchansise, with t-shirts, sweatshirts, hats, beer coozies, and more.</p>
                </div>
            </div>
            <Feature props={{
                src: "/svg/delivery-truck.svg",
                alt: "Delivery and Management",
                title: "Minimal Overhead",
                desc: "We manage and ship all of your merchandise you offer, so you do not have to. Submit orders through us for your merchandise, and once the order has been fufilled, the merch will appear on your store.",
                reverse: false
            }} />
            <Feature props={{
                src: "/svg/merch-pricing.svg",
                alt: "Pricing Model",
                title: "Traditional Model",
                desc: "You have two pricing models to pick from. The first is a traditional model where you place an order for quantity and product. Once the merchandise sells, you receieve price of item costs back plus commision.",
                reverse: true
            }} />
            <Feature props={{
                src: "/svg/merch.svg",
                alt: "Drop Shipping",
                title: "Drop Shipping Model",
                desc: "The second model you can pick from is a drop shipping model. You do not have to pay for merchandise up front, and a wider array of items are available, but the shipping times vary and there is no commision kick-back.",
                reverse: false
            }} />
        </div>
    </Subpage2>
}