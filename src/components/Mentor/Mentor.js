import { Navigate , Outlet , useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

export function Mentor() {
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();
    
    if (!currentUser) {
        return <Navigate to="/login" />
    }

    // authorized so return child components
    if(currentUser.role=="member")navigate(-1);
    else
    return <Outlet/>;
}