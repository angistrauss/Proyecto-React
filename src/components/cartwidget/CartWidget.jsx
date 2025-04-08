import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext'; 

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    left: '70%',
    top: '-10px',
    transform: 'scale(1.3)',
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '4px',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#6C1B9E',
  },
}));

export default function CartWidget() {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <IconButton component={Link} to="/cart" aria-label="cart" sx={{ width: '50px', height: '50px' }}>
      <StyledBadge badgeContent={totalItems}>
        <ShoppingCartIcon sx={{ fontSize: '2.2rem' }} />
      </StyledBadge>
    </IconButton>
  );
}
