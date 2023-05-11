import Image, { ImageProps } from 'next/image';

function Story(props) {
    return (
        <div className="storyContainer">
            <Image className='storyContainer__Image'
                src={require(`../../images/placeholder__${props.image}.png`)}
                alt='' />
            <div className="storyContainer__TextBox--BackgroundColor"></div>
            <div className="storyContainer__TextBox">
                <h2 className="storyContainer__TextBox--Title">{props.title}</h2>
                <h3 className="storyContainer__TextBox--Date">{props.date}</h3>
                <p className="storyContainer__TextBox--Text">{props.text}</p>

            </div>
        </div>
    );
};
export default Story




{/*             <Story
            title='Carlos Galindo'
            date='17/2/1969'
            text='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            image='galindo'
            />
            <Story
            title='monva'
            date='19/5/1995'
            text='Texto largo Texto largo Texto largo Texto largo Texto largo Texto largo Texto largo Texto largo '
            image='monva'
            /> */}