import React from "react";
import "./AbountUs.css"


const AboutUs: React.FC = () => {
    return (
        <div className="about-us-container">
            <img src="public/Rectangle 25.png" alt="Image not found" className="header-image" />
            <div className="texto-about-more">
                <h4>We are Green Plates</h4>
                <p>
                At Green Plates, we are dedicated to promoting a healthy and sustainable lifestyle through the magic of food. Our passion for plant-based cooking and respect for the environment combine to offer fresh and delicious recipes. Our mission is clear: inspire people to embrace plant-based eating as a path to personal well-being and global sustainability.
                </p>
                <h4>Our Green Recipes</h4>
                <p>
                We offer a wide range of recipes, from vegetarian and vegan dishes to gluten-free delights and fresh seasonal options. Our recipes are designed to satisfy all tastes and dietary needs.
                </p>
                <h4>Our Commitment</h4>
                <p>
                    Culinary Excellence: We're passionate about crafting delectable plant-based recipes that leave you craving more. Our team of chefs and food enthusiasts work tirelessly to create dishes that redefine what's possible in vegetarian and vegan cuisine.
                    Sustainability: We're deeply committed to the environment. With every meal, we aim to reduce our ecological footprint, support sustainable agriculture, and inspire others to make Eco-conscious choices.
                    Community: Food brings people together. We're here to foster a community where individuals can share, learn, and grow together. Whether you're a seasoned plant-based pro or just starting your journey, we're here to support you.
                    Education: We believe that knowledge empowers change. We provide resources, tips, and information to help you make informed food choices and live a healthier, more sustainable life. 
                    </p>
            </div>
        </div>
    );
};

export default AboutUs;

