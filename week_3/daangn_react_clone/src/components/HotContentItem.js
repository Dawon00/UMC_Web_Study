import React from "react";
import { Link } from "react-router-dom";

function HotContentItem(props) {
    const { id, name, price, image, address, like, chat } = props;
    console.log(id, name, price, image, address, like, chat);

    const processedName = name.length > 15 ? `${name.slice(0, 15)}...` : name;
    return (
        <div>
            <Link
                to={`/detail/${id}`}
                state={{
                    name: name,
                    price: price,
                    image: image,
                    address: address,
                    like: like,
                    chat: chat,
                }}
            >
                <img src={image} className="rounded-lg w-200 h-200"></img>
            </Link>
            <div className="font-normal text-sm mt-2">{processedName}</div>
            <div className="font-bold text-sm mt-1">{price}</div>
            <div className="font-normal mt-1 text-xs">{address}</div>
            <div className="text-xs mt-1 text-gray-400">
                관심 {like} • 채팅 {chat}
            </div>
        </div>
    );
}

export default HotContentItem;
