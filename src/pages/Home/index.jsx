import { Grid } from '@mui/material';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Feed from '../../components/Feed';
import FriendsList from '../../components/FriendsList';
import SuggestionsList from '../../components/SuggestionsList';

import styles from "./home.module.css"

export default function Home() {
    return (
        <div>
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                    <Menu />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Feed />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FriendsList />
                    <SuggestionsList />
                </Grid>
            </Grid>
        </div>
    );
}