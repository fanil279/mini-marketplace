import { useEffect, useState } from 'react';
import CartList from './cart/CartList';
import './styles/App.css';

function App() {
	const [cart, setCart] = useState(() => (
		JSON.parse(localStorage.getItem('cart'))
	) || []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	useEffect(() => {
		const handleCartUpdate = (e) => {
			if (!e.detail) return;

			setCart((prev) => [...prev, e.detail]);
		};

		window.addEventListener('add-to-cart', handleCartUpdate);
		return () => window.removeEventListener('add-to-cart', handleCartUpdate);
	}, []);

	const handleRemoveFromCart = (id) => {
		setCart((cart) => cart.filter((item) => item.id !== id));
	};

	const totalSum = cart.reduce((acc, el) => acc + el.price, 0);

	return (
		<>
			<p>Number of items: {cart.length}</p>
			<p>Total sum: ${totalSum.toFixed(2)}</p>

			<CartList
				cart={cart}
				onRemove={handleRemoveFromCart}
			/>
		</>
	)
}

export default App;
