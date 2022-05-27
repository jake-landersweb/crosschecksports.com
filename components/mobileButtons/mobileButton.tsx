const imageLinks = {
    ios: '/svg/app_store_dark.svg',
    android: '/svg/play_store.svg',
};

type MobileStoreButtonProps = {
    store: string,
    url: string,
    height?: number,
    width?: number
}

const MobileStoreButton = ({ props }: { props: MobileStoreButtonProps }) => {

    return (
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={`${imageLinks[props.store as keyof typeof imageLinks]}`} className="max-h-[60px]" />
        </a>
    );
}

export default MobileStoreButton;