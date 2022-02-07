import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background}
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold} ;
    font-size: 24px;
    color: ${({theme}) => theme.colors.title}
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)};
    background-color: ${({theme}) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
    flex-direction: row;
    padding: ${RFValue(50)}px ${RFValue(24)}px 0 ${RFValue(24)}px;
    justify-content: space-between;
    align-items: center;
`;

export const UserAvatar = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10;
`;

export const User = styled.View`
    margin-left: ${RFValue(17)}px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;

`;
export const UserGreting = styled.Text`
    color: ${({theme})=> theme.colors.shape};
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.regular};

`;
export const UserName = styled.Text`
    color: ${({theme})=> theme.colors.shape};
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secundary};
    font-size: ${RFValue(24)}px;
`;