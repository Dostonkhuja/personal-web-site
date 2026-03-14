import { useState } from "react";

interface UseTelegramFormReturn {
    name: string;
    email: string;
    message: string;
    loading: boolean;
    error: string | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export const useTelegramForm = (): UseTelegramFormReturn => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "email") setEmail(value);
        if (name === "message") setMessage(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const botToken = "8773474774:AAFLoRNdzY2con3KmsapVSTVtdnAFpbNp2I"; // Telegram bot token
        const chatId = "6676774230"; // Telegram chat ID
        const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        try {
            const res = await fetch(
                `https://api.telegram.org/bot${botToken}/sendMessage`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: chatId, text }),
                }
            );
            const data = await res.json();

            if (!data.ok) {
                setError("Xabar yuborilmadi");
            } else {
                // muvaffaqiyatli yuborilganda formni tozalash
                setName("");
                setEmail("");
                setMessage("");
                alert("Xabar yuborildi!");
            }
        } catch (err) {
            console.error(err); // endi err ishlatilgan bo‘ladi
            setError("Server bilan bog‘lanib bo‘lmadi");
        }
        finally {
            setLoading(false);
        }
    };

    return { name, email, message, loading, error, handleChange, handleSubmit };
};
