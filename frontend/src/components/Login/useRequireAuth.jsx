import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useRequireAuth() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
}

export default useRequireAuth;