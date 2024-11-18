import React from "react";
import ItemsRender from "./ItemsRender";

function Body()
{
    return(
        <div class="row">
            <div class="col-9">
                <div class="row item-category-row">
                    <div class="col-9">
                        <h3>Grocery Type/Category Title</h3>
                    </div>
                    <div class="col-3">
                        <button>Sort/Filter</button>
                    </div>
                </div>
                <div class="row item-preview-row">
                    <table>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Body;