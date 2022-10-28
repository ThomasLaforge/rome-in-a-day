import React from 'react';
import { ResourceType } from '../modules/typings';
import Resource from './Resource';

type ActionCardProps = {
    resources: ResourceType[]
}

export default function ActionCard(props: ActionCardProps) {
    const { resources } = props
    return (
        <div className="action-card">
            <div className="action-card-resources">
                {resources.map(r => <Resource type={r} />)}
            </div>
        </div>
  );
}
