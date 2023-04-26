import user from "../data/user.json";
import data from '../data/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from "./Statistics/Statistics";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column",
        gap: 20,
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* //React homework template */}

      {/* 1 - Профіль соціальної мережі */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatat}
        stats={user.stats}
      />

      {/* 2- Секція статистики */}
      <Statistics
        title='Upload stats'
        stats={data}
      />


    </div>
  );
};
