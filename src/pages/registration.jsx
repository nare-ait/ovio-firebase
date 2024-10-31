import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Registration() {
    
    const { t } = useTranslation();


    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-6">
                <h2 className="text-2xl font-semibold text-center text-gray-800">{t("joinNowAfter")}</h2>
                <div>
                    <label className="block mb-1 font-semibold text-gray-600">{t("nameOfJoin")}</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-gray-600">{t("postOfJoin")}</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-gray-600">{t("passwordOfJoin")}</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                </div>
                <Link to="/" className="text-center block mt-4 text-purple-600 hover:underline">
                <button
                    type="submit"
                    className="w-full py-3 text-white bg-purple rounded-lg font-semibold hover:bg-purple-600 transition duration-300"
                >
                    {t("joinNowAfter")}
                </button>
                </Link>
            </form>
        </div>
    );
}
