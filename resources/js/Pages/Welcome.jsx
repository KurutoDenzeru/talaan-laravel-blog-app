import { Link, Head } from '@inertiajs/react';
import Header from '../Components/Landing/header.jsx'
import HeroLogin from '../Components/Landing/herologin.jsx';
import UniversalFooter from '../Components/footer.jsx';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Index" />
            
            <HeroLogin />
            <UniversalFooter />

        </>
    );
}
