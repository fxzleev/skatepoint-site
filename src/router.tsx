import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Play from './pages/Play'
import NotFound from './pages/NotFound'
import Logss from './pages/Logss'
import Support from './pages/Support'
import Layout from './components/Layout'
import Loader from './components/Loader'

const router = createBrowserRouter([
	{
		path: '/skatepoint-site',
		element: <Layout />,
		loader: Loader,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'play', element: <Play /> },
			{ path: 'logs', element: <Logss /> },
			{ path: 'support', element: <Support /> },
			{ path: '*', element: <NotFound /> },
		],
	},
])

export default router