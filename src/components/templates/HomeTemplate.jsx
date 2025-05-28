import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContext";
import { FiTrendingUp, FiDollarSign, FiShoppingBag, FiUsers } from "react-icons/fi";
import { MdOutlinePointOfSale } from "react-icons/md";

const HomeTemplate = () => {
    const { signOut } = useAuthStore();
    const { user } = UserAuth();

    // Datos de ejemplo para las tarjetas
    const metrics = [
        { title: "Ventas Hoy", value: "$12,845", change: "+12%", icon: <FiDollarSign /> },
        { title: "Transacciones", value: "48", change: "+5%", icon: <MdOutlinePointOfSale /> },
        { title: "Productos Vendidos", value: "156", change: "+8%", icon: <FiShoppingBag /> },
        { title: "Clientes Nuevos", value: "23", change: "+3%", icon: <FiUsers /> }
    ];

    // Datos de ejemplo para el gráfico de ventas
    const salesData = [
        { day: "Lun", sales: 4000 },
        { day: "Mar", sales: 3000 },
        { day: "Mié", sales: 5000 },
        { day: "Jue", sales: 2000 },
        { day: "Vie", sales: 6000 },
        { day: "Sáb", sales: 8000 },
        { day: "Dom", sales: 7000 }
    ];

    return (
        <Container>
            <Header>
                <WelcomeSection>
                    <h1>Bienvenido, {user?.user_metadata?.name || "Usuario"}</h1>
                    <p>Resumen de actividades y métricas clave</p>
                </WelcomeSection>
                <UserSection>
                    <button onClick={signOut}>Cerrar sesión</button>
                </UserSection>
            </Header>

            <MetricsGrid>
                {metrics.map((metric, index) => (
                    <MetricCard key={index}>
                        <MetricIcon>{metric.icon}</MetricIcon>
                        <MetricContent>
                            <h3>{metric.title}</h3>
                            <Value>{metric.value}</Value>
                            <Trend positive={metric.change.startsWith("+")}>
                                <FiTrendingUp /> {metric.change}
                            </Trend>
                        </MetricContent>
                    </MetricCard>
                ))}
            </MetricsGrid>

            <DashboardSection>
                <ChartContainer>
                    <SectionHeader>
                        <h2>Ventas Semanales</h2>
                        <select>
                            <option>Esta semana</option>
                            <option>Semana pasada</option>
                            <option>Este mes</option>
                        </select>
                    </SectionHeader>
                    <BarChart>
                        {salesData.map((data, index) => (
                            <Bar key={index}>
                                <BarFill height={(data.sales / 10000) * 100} />
                                <span>{data.day}</span>
                            </Bar>
                        ))}
                    </BarChart>
                </ChartContainer>

                <RecentSales>
                    <SectionHeader>
                        <h2>Ventas Recientes</h2>
                    </SectionHeader>
                    <SalesTable>
                        <thead>
                            <tr>
                                <th>ID Venta</th>
                                <th>Sucursal</th>
                                <th>Monto</th>
                                <th>Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#45879</td>
                                <td>Sucursal Norte</td>
                                <td>$1,250</td>
                                <td>10:45 AM</td>
                            </tr>
                            <tr>
                                <td>#45878</td>
                                <td>Sucursal Centro</td>
                                <td>$890</td>
                                <td>10:30 AM</td>
                            </tr>
                            <tr>
                                <td>#45877</td>
                                <td>Sucursal Sur</td>
                                <td>$2,150</td>
                                <td>09:15 AM</td>
                            </tr>
                        </tbody>
                    </SalesTable>
                </RecentSales>
            </DashboardSection>

            <QuickActions>
                <ActionButton primary>
                    <MdOutlinePointOfSale /> Nueva Venta
                </ActionButton>
                <ActionButton>
                    <FiShoppingBag /> Registrar Producto
                </ActionButton>
                <ActionButton>
                    <FiUsers /> Agregar Cliente
                </ActionButton>
            </QuickActions>
        </Container>
    );
};

// Estilos
const Container = styled.div`
    padding: 2rem;
    background-color: ${(props) => props.theme.bgtotal};
    min-height: 100vh;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

const WelcomeSection = styled.div`
    h1 {
        font-size: 1.8rem;
        color: #2d3748;
        margin-bottom: 0.5rem;
    }

    p {
        color: #718096;
    }
`;

const UserSection = styled.div`
    button {
        background-color: #e53e3e;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        cursor: pointer;
        font-weight: 500;

        &:hover {
            background-color: #c53030;
        }
    }
`;

const MetricsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
`;

const MetricCard = styled.div`
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
`;

const MetricIcon = styled.div`
    font-size: 2rem;
    color: #4c51bf;
    margin-right: 1rem;
    background: #ebf4ff;
    padding: 0.75rem;
    border-radius: 50%;
`;

const MetricContent = styled.div`
    h3 {
        font-size: 0.875rem;
        color: #718096;
        margin-bottom: 0.25rem;
    }
`;

const Value = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748;
`;

const Trend = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${props => props.positive ? "#38a169" : "#e53e3e"};
    margin-top: 0.25rem;

    svg {
        margin-right: 0.25rem;
    }
`;

const DashboardSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ChartContainer = styled.div`
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const RecentSales = styled.div`
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    h2 {
        font-size: 1.25rem;
        color: #2d3748;
    }

    select {
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        border: 1px solid #e2e8f0;
    }
`;

const BarChart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 200px;
    margin-top: 2rem;
`;

const Bar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10%;

    span {
        margin-top: 0.5rem;
        font-size: 0.75rem;
        color: #718096;
    }
`;

const BarFill = styled.div`
    width: 60%;
    background-color: #4c51bf;
    border-radius: 0.25rem 0.25rem 0 0;
    height: ${props => props.height}%;
    transition: height 0.3s ease;
`;

const SalesTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        padding: 0.75rem 1rem;
        text-align: left;
        border-bottom: 1px solid #edf2f7;
    }

    th {
        color: #718096;
        font-weight: 600;
        font-size: 0.75rem;
        text-transform: uppercase;
    }

    td {
        color: #2d3748;
        font-size: 0.875rem;
    }

    tr:hover {
        background-color: #f7fafc;
    }
`;

const QuickActions = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    background-color: ${props => props.primary ? "#4c51bf" : "white"};
    color: ${props => props.primary ? "white" : "#4a5568"};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    flex: 1;

    &:hover {
        background-color: ${props => props.primary ? "#434190" : "#f7fafc"};
        transform: translateY(-1px);
    }

    svg {
        font-size: 1.25rem;
    }
`;

export default HomeTemplate;