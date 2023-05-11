'use client'
import {useRouter} from 'next/navigation'

function FloatingButton() {
    const router = useRouter()
    return (
        <div className="floatingButtonContainer"
        onClick={() => router.push('/contact')}
        >
            <p>Contactanos</p>
        </div>
    );
}
export default FloatingButton;