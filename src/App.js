import './resources/css/common.css';
import RHeader from './components/include/reserve_header';
import ReserveSC1 from './components/reserve_section_1';
import ReserveSC2 from './components/reserve_section_2';
import ReserveSC3 from './components/reserve_section_3';
import ReserveSC4 from './components/reserve_section_4';
import ReserveSC5 from './components/reserve_section_5';
import RFooter from './components/include/reserve_footer';
function App() {
  return (
    <>
      <RHeader/>
      <ReserveSC1/>
      <ReserveSC2/>
      <ReserveSC3/>
      <ReserveSC4/>
      <ReserveSC5/>
      <RFooter/>
    </>
  );
}

export default App;
