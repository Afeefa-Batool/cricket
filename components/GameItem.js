import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const GameItem = ({ game }) => {
    const id = game.id
    return (
        <tr>
            <td>{game.homeTeam}</td>
            <td>{game.awayTeam}</td>
            <td>
                <Link href={`/game/${game.id}`}>

                    <FontAwesomeIcon icon={faEye} />

                </Link>
                <Link href="/admingame/[id]" as={`/admingame/${game.id}`}>

                    <FontAwesomeIcon icon={faPencilAlt} />

                </Link>
            </td>
        </tr>
    );
};

export default GameItem;