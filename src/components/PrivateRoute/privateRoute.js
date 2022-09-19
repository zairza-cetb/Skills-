import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

export function PrivateRoute({ children }) {
    const currentUser = useSelector(selectCurrentUser);
    
    if (!currentUser) {
        return <Navigate to="/login" />
    }

    // authorized so return child components
    return children;
}