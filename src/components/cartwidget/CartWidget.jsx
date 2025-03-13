import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    left: '70%',
    top: '-10px',
    transform: 'scale(1.3)',
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '4px', /* Más relleno para mejor visualización */
    fontSize: '0.8', /* Tamaño más grande */
    fontWeight: '600', /* Aumenta el grosor del número */
    color: 'white',
    backgroundColor: '#6C1B9E',
  },
}));

export default function CartWidget() {
  return (
    <IconButton component={Link} to="/cart" aria-label="cart" sx={{ width: '50px', height: '50px' }}>
      <StyledBadge badgeContent={2}>
        <ShoppingCartIcon sx={{ fontSize: '2.2rem' }} /> {/* Aumentamos tamaño del icono */}
      </StyledBadge>
    </IconButton>
  );
}
