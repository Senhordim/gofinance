import React from 'react';



import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    UserAvatar,
    User,
    UserGreting,
    UserName,
    Icon,

} from './styles';

export default function Dashboard(){
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <UserAvatar source={{ uri: 'https://avatars.githubusercontent.com/u/212854?v=4'}} />
                        <User>
                            <UserGreting>Olá</UserGreting>
                            <UserName>Diego</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            
        </Container>
    )
}