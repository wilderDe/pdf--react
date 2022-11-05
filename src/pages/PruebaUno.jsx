import { useRef } from "react"
import { useReactToPrint } from "react-to-print";


import './prueba.css';
import foto1 from '../../assets/foto1.jpg'
import foto2 from '../../assets/foto2.jpg'
import foto3 from '../../assets/foto3.jpg'
import foto4 from '../../assets/foto4.jpg'
import foto5 from '../../assets/foto5.jpg'
export const PruebaUno = () => {
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "reporte prueba",
        
    })

    const marginTop = "50px";
    const marginRight = "50px";
    const marginBottom = "50px";
    const marginLeft = "50px";

    const getPageMargins = () => {
        return `@page{ 
                    margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important;
                    size: landscape;
                }
                `;
      };
    
    return (
        <div>
            <div ref={componentRef} className="hoja">
            <style>  {getPageMargins()} </style>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, debitis autem, ut totam corporis doloremque iure assumenda saepe aliquam voluptatum quam, odio perspiciatis. Ea, facere distinctio nemo modi itaque assumenda!
                Explicabo quibusdam dolores sapiente laborum minus cum dolor. Corrupti temporibus fugiat tenetur aliquam voluptatum, ratione obcaecati alias veritatis minima quas, quo non debitis minus explicabo consequuntur? Doloribus necessitatibus aliquam accusantium!
                Earum voluptatem dolorum ipsam vero dolorem deleniti provident quas ipsa distinctio, at assumenda veritatis possimus sed asperiores deserunt laudantium minus modi nam sint sapiente facere quam excepturi rem aliquid! Inventore.
                Voluptatum iure possimus aut delectus reiciendis voluptatibus. Aspernatur asperiores facilis recusandae ut dignissimos quidem voluptas quasi dicta eum, provident nam quaerat cum, neque quas animi sed quis itaque. Repellendus, cupiditate!
                Aliquam beatae soluta consequatur mollitia dignissimos fuga cum excepturi similique unde nesciunt neque perferendis magnam, dolorem velit nulla eum optio doloremque odit officiis hic nisi? Deleniti quam modi natus cum.
                In odit ullam laboriosam, eveniet nisi hic explicabo alias, tenetur odio sequi dignissimos deleniti, architecto blanditiis dolores magnam cupiditate earum dolor saepe soluta delectus adipisci voluptatum ipsa. Recusandae, quisquam quibusdam!
                Aliquam excepturi natus eaque, enim at voluptas modi laboriosam obcaecati suscipit dicta nesciunt quasi illum libero cum eius vel consequatur a odit ea magnam. Nisi aliquam facilis quibusdam quia quae!
                Accusamus numquam nulla ullam assumenda, et blanditiis animi beatae reprehenderit magnam debitis autem eaque unde iusto voluptate incidunt. Quam dignissimos sint laudantium fuga voluptates sapiente facere esse ad explicabo itaque!
                Maxime nostrum porro repellendus atque officiis cupiditate, non itaque libero qui consequatur, adipisci, asperiores praesentium nisi voluptas dignissimos illo saepe. Nostrum, ex corrupti? Illo, in ut fuga minima quasi dolores.
                Suscipit exercitationem ducimus dolore in nulla minima esse quo eius incidunt, ipsa explicabo nam, quisquam, fugit voluptas. Commodi, non tenetur velit harum suscipit sed nemo dolores, quisquam libero qui natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit voluptas repudiandae id, temporibus, dicta laudantium possimus cupiditate consectetur optio mollitia laborum doloremque culpa vel, ea dignissimos asperiores quae ad.
                Labore, nostrum deleniti voluptatibus ipsam rem iste! Veniam ratione quam possimus reprehenderit enim eum quasi ad facere dolor nam. Praesentium quae culpa consectetur vero reprehenderit dolorem voluptatum atque itaque voluptates.
                Laudantium alias reiciendis veniam voluptatum! Eveniet natus in non sint quam qui eius quaerat cumque enim. Fugit porro obcaecati atque, praesentium iste aliquam voluptatibus. Fugiat recusandae aliquid laudantium nam neque.
                Cum, saepe dolore quia odio consectetur ut vero qui suscipit sed expedita, hic quisquam consequatur maxime, nesciunt nisi nulla animi! Sit nulla repellat aut eaque, repudiandae earum? Omnis, asperiores laboriosam?
                Ut ducimus asperiores nam iure consequatur quasi ea corrupti nesciunt, cum, voluptatem enim accusantium vitae nemo a ratione? Beatae accusantium nemo vitae dolor? Nisi magni, quidem accusantium aut rerum odit!
                Dignissimos maxime earum adipisci nemo expedita aliquam nesciunt, doloremque ullam ipsum omnis impedit, quod, unde ducimus. Odit tempore velit iure corporis, earum vero similique quibusdam quisquam cumque, culpa, harum aspernatur?
                Blanditiis nulla quasi porro odit, repellendus quis dignissimos rerum minima! Molestias a laborum voluptatibus accusamus hic repudiandae quaerat voluptates, odit perspiciatis possimus dolorem, expedita corrupti, illo quis pariatur dolorum. Magnam.
                Impedit illum sapiente ipsa quidem, labore quod dignissimos ipsam unde voluptas vero sit. Earum fugiat velit ab tempore tenetur itaque eos harum atque optio? Omnis officiis distinctio sunt! Corrupti, facere?
                Nihil autem, soluta magni in deserunt amet quidem ea suscipit hic cumque atque eligendi maxime provident natus ratione repellendus eum beatae exercitationem quam veniam? Optio, debitis explicabo? Error, culpa aut?
                Voluptatem quidem accusantium ad at quibusdam, modi reiciendis earum ratione animi! Fugiat natus, tenetur in accusantium quas perferendis repellat molestiae magnam cum soluta, nam ipsum sapiente laborum a perspiciatis quis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem hic veniam autem dolore illum voluptatibus quae voluptas repudiandae praesentium nisi, ullam, quam sed? Accusamus quasi expedita praesentium nulla optio.
                Aliquam possimus, porro at modi nihil provident numquam accusantium praesentium harum. Natus officiis enim placeat laborum non. Nesciunt esse necessitatibus consectetur quisquam praesentium placeat? Iste magni perferendis recusandae. A, neque!
                Sed vero ipsa eos ad odit vitae minus, aut explicabo amet soluta! Ab praesentium doloribus soluta dicta, natus accusantium totam iure eum sequi architecto id magni obcaecati quod eligendi incidunt!
                Praesentium, iste vitae eveniet neque cumque harum. Vitae perferendis soluta fugiat natus possimus sequi, maxime ratione tenetur sapiente voluptatum. Iste cumque deleniti rerum labore explicabo voluptas esse debitis dolores ipsam?
                Distinctio molestias odit expedita autem eius quod cum eos cupiditate? Amet, animi! Voluptate illum fugit, perspiciatis est ea aspernatur. Deserunt minus eius, ipsam necessitatibus pariatur repudiandae id non molestiae dignissimos.
                Odit at dolore quis dicta aut impedit sint, natus repellendus, nulla labore cumque sit eaque. Doloribus eius laudantium porro quam accusantium! Facere blanditiis amet ullam tempore sed adipisci harum recusandae.
                Asperiores eligendi, ad pariatur eos consequatur quasi error doloribus natus aperiam dolore dicta, non corporis quos expedita dolorem amet culpa autem possimus est soluta sapiente dolor accusantium iure corrupti. Numquam.
                Voluptatibus repellat libero beatae laudantium perspiciatis tenetur dicta rerum ea soluta quasi ipsa, id, nisi earum ipsum provident reprehenderit ullam velit corporis laboriosam blanditiis quae facilis culpa. Accusamus, obcaecati sequi.
                Consequuntur asperiores incidunt, a alias commodi nesciunt harum provident, quisquam maiores, ex quae. Iure sunt consequatur accusamus magni ea repudiandae atque, ut quasi delectus dicta distinctio, deserunt facere veniam non?
                Minus veniam nesciunt animi dolorem quisquam doloribus incidunt adipisci dolorum consequatur consequuntur, quis optio assumenda laborum harum dolores quam voluptas, aliquid, sed voluptatibus placeat ducimus nobis facere fugit labore! Ducimus?
                
            
                <div className="galery">
                    <img src={foto1} alt="" />
                    <img src={foto2} alt="" />
                    <img src={foto3} alt="" />
                    <img src={foto4} alt="" />

                </div>                    
                    
                
                
            </div>

            <button onClick={handlePrint}>Imprimir</button>
        </div>
    )
}
