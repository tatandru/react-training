import "./style.scss"
import React, { useState } from "react"
import { useLoaderData, useLocation, useParams } from "react-router-dom";

const CreateCocktail = () => {

    return (
        <div className="createCocktail">
            <div className="uploadArea">
                adsfsadf
            </div>
            
                <form className="cocktailInput">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button>Submit</button>
                </form>
            
        </div>

    );
}

export default CreateCocktail;