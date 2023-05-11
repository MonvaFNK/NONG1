import Image from 'next/image';
import AgenciaHispanaFooter from '../../Images/Agencia_hispana_Footer.png';

function Footer() {
    return (
        <div className="footerContainer flex flex-col items-center justify-center">
            <div className="flex flex-row footerContainer__item">
                <div className='flex flex-col w-1/2'>
                    <div className='flex justify-center items-center py-4'>
                        <Image className='h-full w-1/2' src={AgenciaHispanaFooter} alt="FooterLogo" />
                        {/*                         <h3>Agencia Hispana de Carlos E. Galindo</h3> */}
                    </div>
                    <p>Preparadores de documentos legales bilingues, certificados por la corte suprema de Arizona.</p>
                </div>
                <div className='divisor'></div>
                <div className="footerContainer__item">
                    <p>Manutencion- Divorcios- Custodia- Divorcios por Publicacion- Consulta Gratis</p>
                    <div className="flex flex-row justify-evenly">
                        <div>
                            <h2>Encuentranos en:</h2>
                        </div>
                        <div>
                            <ul className="font-bold flex flex-col justify-items-end">

                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Facebook</li>
                                <li>Tiktok</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <p>AgenciaHispanaLLC derechos reservados</p>
            </div>
        </div>
    );
}
export default Footer;