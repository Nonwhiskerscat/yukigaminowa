function Footer() {

    const footer_style = {
        'color': 'green',
        'marginTop': '1rem',
        'marginBottom': '3rem'
    }

    return (
        <div>
            <p style={footer_style}>
                copyright ⓒshoesStore all right reserved.
            </p>
        </div>
    );
}

export default Footer;