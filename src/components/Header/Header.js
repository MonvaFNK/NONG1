import AgenciaHispana from '../../Images/AgenciaHispana.png';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';


function Header() {
    return (
        <div className="header flex overflow-hidden justify-between items-center h-28 pr-16">
            <Link className="h-28 w-28 p-1" href="/">
                <Image className='h-auto max-w-full max-h-full' src={AgenciaHispana} alt="Agencia Hispana Logo" />
            </Link>
            <Link href="/">
                <div className='font-bold'>Inicio</div>
            </Link>
            <Link href="/">
                <div className='font-bold'>Servicios</div>
            </Link>
            <Link href="/">
                <div className='font-bold'>Nosotros</div>
            </Link>
            <Link href="/">
                <div className='font-bold'>Reunion</div>
            </Link>
            <Link href="/">
                <div className='font-bold'>Contacto</div>
            </Link>
        </div>
    );
}

export default Header