import '../../styles/card.css'
import images from '../../assets/images'; // Adjust the path accordingly
import Car from '../../objects/car';

export const Card = ({brand, line, metadata, combustionType, price, imgPath }: Car) =>  {

    return (
        <>
            <div className="grid-card-unit-container">
                
                <div className="grid-img">
                    <img src={images[imgPath]} alt=""/>
                </div>

                <div className="item grid-brand">
                    <p>{brand}</p>
                </div>

                <div className="item grid-line">
                    <p>{line}</p>
                </div>

                <div className="item grid-metadata">
                    <p>{metadata}
                    </p>
                </div>

               
                <div className="item grid-combustion-type">
                    <p>{combustionType}</p>
                </div>

                <div className="item grid-price">
                    <p>{price}</p>
                </div>
            </div>
        </>
    )
}