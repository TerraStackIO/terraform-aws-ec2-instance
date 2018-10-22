/// <reference types="node" />
import { BaseComponent } from "terrastack";

export as namespace TerrastackTerraformAwsEc2Instance;

export = Component;

declare class Component extends BaseComponent<Component.Configuration> {}

declare namespace Component {
  export interface Configuration extends object {
    /**
     * Name to be used on all resources as prefix.
     *
     * 
     */
    name: string;

    /**
     * Number of instances to launch.
     *
     * Default: 1
     */
    instance_count?: number;

    /**
     * ID of AMI to use for the instance.
     *
     * 
     */
    ami: string;

    /**
     * The Placement Group to start the instance in.
     *
     * Default: ""
     */
    placement_group?: string;

    /**
     * The tenancy of the instance (if the instance is running in a VPC). Available values: default, dedicated, host..
     *
     * Default: "default"
     */
    tenancy?: string;

    /**
     * If true, the launched EC2 instance will be EBS-optimized.
     *
     * Default: false
     */
    ebs_optimized?: boolean;

    /**
     * If true, enables EC2 Instance Termination Protection.
     *
     * Default: false
     */
    disable_api_termination?: boolean;

    /**
     * Shutdown behavior for the instance.
     *
     * Default: ""
     */
    instance_initiated_shutdown_behavior?: string;

    /**
     * The type of instance to start.
     *
     * 
     */
    instance_type: string;

    /**
     * The key name to use for the instance.
     *
     * Default: ""
     */
    key_name?: string;

    /**
     * If true, the launched EC2 instance will have detailed monitoring enabled.
     *
     * Default: false
     */
    monitoring?: boolean;

    /**
     * A list of security group IDs to associate with.
     *
     * 
     */
    vpc_security_group_ids: array;

    /**
     * The VPC Subnet ID to launch in.
     *
     * 
     */
    subnet_id: string;

    /**
     * If true, the EC2 instance will have associated public IP address.
     *
     * Default: false
     */
    associate_public_ip_address?: boolean;

    /**
     * Private IP address to associate with the instance in a VPC.
     *
     * Default: ""
     */
    private_ip?: string;

    /**
     * Controls if traffic is routed to the instance when the destination address does not match the instance. Used for NAT or VPNs..
     *
     * Default: true
     */
    source_dest_check?: boolean;

    /**
     * The user data to provide when launching the instance.
     *
     * Default: ""
     */
    user_data?: string;

    /**
     * The IAM Instance Profile to launch the instance with. Specified as the name of the Instance Profile..
     *
     * Default: ""
     */
    iam_instance_profile?: string;

    /**
     * A number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet..
     *
     * Default: 0
     */
    ipv6_address_count?: number;

    /**
     * Specify one or more IPv6 addresses from the range of the subnet to associate with the primary network interface.
     *
     * Default: []
     */
    ipv6_addresses?: array;

    /**
     * A mapping of tags to assign to the resource.
     *
     * Default: {}
     */
    tags?: BaseComponent.KeyValuePair;

    /**
     * A mapping of tags to assign to the devices created by the instance at launch time.
     *
     * Default: {}
     */
    volume_tags?: BaseComponent.KeyValuePair;

    /**
     * Customize details about the root block device of the instance. See Block Devices below for details.
     *
     * Default: []
     */
    root_block_device?: array;

    /**
     * Additional EBS block devices to attach to the instance.
     *
     * Default: []
     */
    ebs_block_device?: array;

    /**
     * Customize Ephemeral (also known as Instance Store) volumes on the instance.
     *
     * Default: []
     */
    ephemeral_block_device?: array;

    /**
     * Customize network interfaces to be attached at instance boot time.
     *
     * Default: []
     */
    network_interface?: array;

    /**
     * The credit option for CPU usage (unlimited or standard).
     *
     * Default: "standard"
     */
    cpu_credits?: string;

  }
}
