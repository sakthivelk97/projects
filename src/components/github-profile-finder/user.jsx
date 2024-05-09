



export default function User({user}){
    const {avatar_url,
         followers, 
         following, 
         public_repos, 
        name,
        login,
        created_at} = user;

        const createdDate = new Date(created_at)

    return(
        <div className="user">
            <div>
                <h2>Github Profile Card</h2>
                <img src={avatar_url} alt="user" className="avatar" />
            </div>
            <div className="name-container">
               <a href={`https://github.com/${login}`}>{name || login}</a>
               <p>User Joined on <span className="extra-style">{`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {month: 'short'})} ${createdDate.getFullYear()}`}</span></p>
            </div>
            <div className="profile-info">
               
                    <div>
                        <p>Public Repos</p>
                        <p className="extra-style">{public_repos}</p>
                    </div>

                    <div>
                    <p>Followers</p>
                        <p className="extra-style">{followers}</p>
                    </div>

                    <div>
                    <p>Following</p>
                        <p className="extra-style">{following}</p>
                    </div>
                
            </div>
        </div>
    )
}