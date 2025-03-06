export function ChatButton() {
    return (
        <a 
            href="https://wa.me/9179644717" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-success position-fixed z-3 d-flex align-items-center gap-2 shadow"
            style={{ bottom: "20px", right: "20px", borderRadius: "50px", padding: "10px 15px" }}
        >
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                width="24px" 
                height="24px" 
            />
            Chat
        </a>
    );
}
