import React from 'react'


export default class Team extends React.Component {


    render() {
        return (
            <div style={{ paddingTop: '50px', backgroundColor: '#f6f6f6' }}>
                <h1 style={{ color: 'rebeccapurple' }}>Team</h1>
                <div style={{ display: 'inline-flex', }}>
                    <div id='Team'>
                        <img style={{ borderRadius: '50%' }} src='https://media-exp1.licdn.com/dms/image/C5603AQEKsi2dujxVuw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=A7K1rZ_qA7FIQYFAWozhNInaf45SHCXjZLFjgoIWr-U'></img>
                        <p style={{ color: 'rebeccapurple', fontSize: 'large' }}>Jon F</p>
                    </div>
                    <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                        <img style={{ borderRadius: '50%' }} src='https://media-exp1.licdn.com/dms/image/C5603AQGir_XhFSVZZg/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=cf8ulCPpxQDP9iENPpBTONWFQIh4Pc6LxIKKeEan9q8'></img>
                        <p style={{ color: 'rebeccapurple', fontSize: 'large' }}>James K</p>
                    </div>
                    <div>
                        <img style={{ borderRadius: '50%' }} src='https://media-exp1.licdn.com/dms/image/C5603AQFCzPz_nthE0g/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=OwHNO0bA0RRX5y7SCaB64XEgEPUlxuOGP-nWluyiwmM'></img>
                        <p style={{ color: 'rebeccapurple', fontSize: 'large' }}>TJ</p>
                    </div>

                </div>
            </div>
        )
    }
}